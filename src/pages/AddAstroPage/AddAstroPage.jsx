import React, { Component } from 'react';
// import NavBar from '../../components/NavBar/NavBar';
// import astro from '../../../models/astro';

class AddAstroPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            image: '',
            type: '',
            location: '',
            proximity: '',
            notes: '',
            seen: ''
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddAstro(this.state.formData)
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render () {
        return (
            <>
             <h4>Add Astronomical Body</h4>
             <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                 <div className="form-group">
                     <label>Title (required)</label>
                     <input
                     className="form-control"
                     name="name"
                     value={this.state.formData.name}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Image URL</label>
                     <input
                     className="form-control"
                     name="image"
                     value={this.state.formData.image}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Type</label>
                     <input
                     className="form-control"
                     name="type"
                     value={this.state.formData.type}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Location</label>
                     <input
                     className="form-control"
                     name="location"
                     value={this.state.formData.location}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Proximity to Earth</label>
                     <input
                     className="form-control"
                     name="proximity"
                     value={this.state.formData.proximity}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Notes</label>
                     <input
                     className="form-control"
                     name="notes"
                     value={this.state.formData.notes}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
                 <div className="form-group">
                     <label>Seen?</label>
                     <input
                     className="form-control"
                     name="seen"
                     value={this.state.formData.seen}
                     onChange={this.handleChange}
                     required
                     />
                 </div>
            <button
                type="submit"
                className="btn purple"
                disabled={this.state.invalidForm}
            >
            <i className="material-icons left">add</i>
            Add Object
            </button>  
            </form>
            </>
        );
    }
}

export default AddAstroPage;