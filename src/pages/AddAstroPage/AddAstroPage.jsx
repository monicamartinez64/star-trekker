import React, { Component } from 'react';
import './AddAstroPage.css';

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
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddAstro(this.state.formData);
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
            <main>
            <div className="AddAstroPage">
                <h4>Add Astronomical Object</h4>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field inline col s6">
                            <input
                                name="name"
                                id="astro_name"
                                type="text"
                                className="active"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="astro_name">Object Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field inline col s6">
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
                            <label htmlFor="astro_type">Type of Object</label>
                        </div>
                    </div>

                    <div>
                        <label>Type of Object</label>
                            <input
                                className="with-gap"
                                name="type"
                                value="constellation"
                                type="radio"
                                onChange={this.handleChange}
                            />
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
                                className="active focus"
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
                            <label>Seen?</label>
                            <input
                                name="seen"
                                id="astro_seen"
                                type="text"
                                className="active"
                                value={this.state.formData.seen}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn purple"
                        disabled={this.state.invalidForm}
                    ><i className="material-icons left">add</i>Add Object
                    </button>  
                </form>
            </div>
            </main>
            </>
        );
    }
}

export default AddAstroPage;