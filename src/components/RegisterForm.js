import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { customInput, customSelect } from './fields/index'
class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    {/* /   <label>Name</label> */}
                    <Field name="name" component={customInput} type="text" label="Name" />
                </div>
                <div>
                    {/* /   <label>Preferred Formatting</label> */}
                    <Field name="preference" component={customSelect} type="text" label="Preferred Formatting">
                        {/* <options/>
                         <option value="tabs">Tabs</option>
                         <option value="spaces">Spaces</option> */}


                    </Field>
                </div>
                <div>
                    {/* <label>Signup to newsletter?</label> */}
                    <Field name="newsletter" component={customInput} type="checkbox" label="Signup to newsletter?" />
                </div>
                <button type="submit"> Submit</button>

            </form>
        )
    }
}
RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)
export default RegisterForm;