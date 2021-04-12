import React, {useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    GridListTile,
    IconButton,
    Paper,
    TextField,
} from "@material-ui/core";
import {styles} from "./style";
import DeleteIcon from '@material-ui/icons/Delete';

export function Item({item, onDelete, onEdit}) {
    const [editNote, setEditNote] = useState(item);

    function changeItem(e) {
        setEditNote({
            ...editNote,
            [e.target.name]: e.target.value
        })
    }

    function deleteItem() {
        onDelete(item.id)
    }

    function saveEditNote() {
        onEdit(editNote)
    }

    return (
        <GridListTile style={styles.items}>
            <Card>
                <Paper elevation={15}>
                    <CardContent>
                        <TextField rows={5} multiline={true}
                                   name='description'
                                   value={editNote.description}
                                   onChange={changeItem}
                                   onBlur={saveEditNote}
                        >
                        </TextField>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={deleteItem} aria-label="delete" size="small">
                            <DeleteIcon color='secondary'/>
                        </IconButton>
                    </CardActions>
                </Paper>
            </Card>
        </GridListTile>
    );
}

