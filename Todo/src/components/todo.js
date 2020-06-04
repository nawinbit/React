import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, changeStatus } from '../actions'
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core"
import { Edit, Delete } from "@material-ui/icons"
import FormComponent from "./form"

const Todo = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    const displayText = (text, status) => {
        if (status === "completed") {
            return <div><del>{text}</del></div>
        }
        else if (status === "edit") {
            return <FormComponent placeholder="" buttonText="Save" text={text} />
        }
        return <div>{text}</div>
    }

    const renderList = () => {
        return props.todo.map(({ text, status }) => {
            return (
                <div>
                    <List className={classes.root}>
                        <ListItem key={text}>
                            <ListItemText onClick={() => status !== "edit" ? props.changeStatus(text, "completed") : null}>
                                {displayText(text, status)}
                            </ListItemText>
                            {status === "pending" ? <Edit onClick={() => props.changeStatus(text, "edit")} /> : null}
                            {status !== "edit" ? <Delete onClick={() => props.deleteItem(text)} /> : null}
                        </ListItem>
                    </List>
                </div>
            );
        })
    }

    return (
        <div >
            <h3>My Todo List</h3>
            <FormComponent placeholder="Enter a new Item" buttonText="Add" text="" operation="Add" />
            <div>
                {renderList()}
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return { todo: state.item }
}


export default connect(mapStateToProps, { deleteItem, changeStatus })(Todo);