import React, { Component } from 'react';

class AddObservationPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            date: '',
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
        this.props.handleAddObservation(this.state.formData);
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
                <h4>Add Observation</h4>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field inline col s6">
                            <input
                                name="date"
                                id="observation_date"
                                type="date"
                                className="datepicker"
                                value={this.state.formData.date}
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="observation_date">Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field inline col s6">
                            <input
                                name="location"
                                id="observation_location"
                                type="text"
                                className="active"
                                value={this.state.formData.location}
                                onChange={this.handleChange}
                                />
                            <label htmlFor="observation_location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                name="notes"
                                id="observation_notes"
                                type="text"
                                className="active"
                                value={this.state.formData.notes}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="observation_notes">Notes</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn purple"
                        disabled={this.state.invalidForm}
                    ><i className="material-icons left">add</i>Add Observation
                    </button>  
                </form>
            </main>
            </>
        )
    }
}

export default AddObservationPage;