import React from 'react';
import { connect } from 'react-redux';
import { addItem,editItem } from '../actions'
import { useFormik } from "formik";
import { Input, Button } from "@material-ui/core"

const FormComponent = (props) => {

    const formik = useFormik({
        initialValues: {
            todo: props.text
        },
        onSubmit(values) {
            if(props.buttonText === "Add"){
                props.addItem(values.todo)
                values.todo = ""
            }
            else {
                props.editItem(props.text,values.todo)
            }
        }
    })

    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
                <Input id="todo" name="todo" value={formik.values.todo} placeholder={props.placeholder} onChange={formik.handleChange} />
                <Button type="submit" variant="contained" >{props.buttonText}</Button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { todo: state.item }
}

export default connect(mapStateToProps, { addItem,editItem })(FormComponent);