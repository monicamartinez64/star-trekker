import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class EditAstroPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.astro
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateAstro(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
            <main>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                     <input
                        name="name"
                        id="astro_name"
                        type="text"
                        className="active"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        />
                        <label htmlFor="astro_name">Object Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                     <input
                        name="image"
                        id="astro_image"
                        type="text"
                        className="active"
                        value={this.state.formData.image}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="astro_image">Image URL</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s6">
                     <input
                     name="type"
                     id="astro_type"
                     type="text"
                     className="active"
                     value={this.state.formData.type}
                     onChange={this.handleChange}
                     />
                     <label htmlFor="astro_type">Type</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s6">
                     <input
                     name="location"
                     id="astro_location"
                     type="text"
                     className="active"
                     value={this.state.formData.location}
                     onChange={this.handleChange}
                     />
                     <label htmlFor="astro_location">Location</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s6">
                     <input
                     name="proximity"
                     id="astro_proximity"
                     type="text"
                     className="active"
                     value={this.state.formData.proximity}
                     onChange={this.handleChange}
                     />
                     <label htmlFor="astro_proximity">Proximity to Earth</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s6">
                     <input
                     name="notes"
                     id="astro_notes"
                     type="text"
                     className="active"
                     value={this.state.formData.notes}
                     onChange={this.handleChange}
                     />
                     <label htmlFor="astro_notes">Notes</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s6">
                     <input
                     name="seen"
                     id="astro_seen"
                     type="text"
                     className="active"
                     value={this.state.formData.seen}
                     onChange={this.handleChange}
                     />
                     <label htmlFor="astro_seen">Seen?</label>
                     </div>
                 </div>
            <button
                type="submit"
                className="btn purple"
                disabled={this.state.invalidForm}
            >
            <i className="material-icons left">edit</i>
            Update Object
            </button>  
            </form>
            </main>   
            </>
        )   
}
}

export default EditAstroPage;