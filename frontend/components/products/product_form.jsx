import React from 'react';
import {Link} from 'react-router-dom'


class productForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.product
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const id = this.props.currentUser;
    const formData = new FormData();
    for (let key in this.state) {
      if (key === 'seller_id') {
        formData.append(`product[${key}]`,this.props.currentUser)
      }else{
        formData.append(`product[${key}]`,this.state[key])
    }
  }
    formData.append('product[photo]',this.state.photoFile);
    debugger
     this.props.action(formData,this.props.product.id)
     .then(()=>{
       this.props.history.push(`/`)})
  }
  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  
  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="product-form" >
          <h2 className="form-title">Add a new listing</h2>
            <div className="total-form">
              <div className="with-out-image">
              <label className="listing-details">Listing details</label>
              <div className="title">
                <div className="form-label">
                  <h3 className="title-label">Title</h3>
                  <h6 >Include Keywords that buyers would use to search for your item</h6>
                  
                </div>
                <input className="title-input" type="text" value={this.state.title}
                    onChange={this.update('title')}
                    />
            </div>
            <div className="form-description">
              <div className="desc-label">Description
              <h6>Start with a brief overview that describes your item's finest features.

List details like dimensions and key features in easy-to-read bullet points.

Tell buyers a bit about your process or the story behind this item.</h6></div>
                <div className="desc2">
                  <textarea value={this.state.description}
                    onChange={this.update('description')}
                    className="textarea-desc"/>
                </div>
            </div>
            <div className="price-div">
          <div className="price">
            <h3>Price</h3>
            <h6>Factor in the costs of materials and labor, plus any related business expenses. Consider the total price buyers will pay too—including shipping.</h6>
            </div>
            <input value={this.state.price}
              onChange={this.update('price')} className="price-input"/>
          
          </div>
          <div className="quantity-div">
          <div className="quantity">
           <h3>Quantity </h3>
           <h6>For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</h6>
           </div>
           
            <input value={this.state.quantity}
              onChange={this.update('quantity')} id="quantity-input"/>
        
          
          </div>
          <div className="buttons">
          <input  type="submit" className="button"
                  value={this.props.formType}/>
            <Link to="/" ><button className="button">Cancel</button></Link>
               
           </div>
          </div>
          <div className="image-one">
          <label>Photos
            <input type="file" onChange={this.handleFile.bind(this)}/>
          </label>
          </div>
       
                </div>
        </form>
     
  </div>
    )}
}

export default productForm;