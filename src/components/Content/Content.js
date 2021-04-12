import React from 'react';
import {Button, GridList} from "@material-ui/core";
import {styles} from "./style";
import {Item} from "./Item";

export function Content({notesList, onAdd, onDelete, onEdit}) {

    return (
        <>
            <Button color='primary' variant='contained'
                    onClick={onAdd}>
                Add new note
            </Button>

            <GridList cols={3} cellHeight={260} spacing={2} style={styles.root}>
                {notesList.map((item) => (
                    <Item key={item.id} item={item} onDelete={onDelete} onAdd={onAdd} onEdit={onEdit}/>
                ))}

            </GridList>
        </>
    );
}

