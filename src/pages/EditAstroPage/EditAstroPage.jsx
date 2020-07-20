import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field inline col s6">
                     <label>Title (required)</label>
                     <input
                        name="name"
                        id="astro_name"
                        type="text"
                        className="active"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field inline col s6">
                     <label>Image URL</label>
                     <input
                        name="name"
                        id="astro_name"
                        type="text"
                        className="active"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                    />
                     </div>
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