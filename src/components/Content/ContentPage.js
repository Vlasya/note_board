import React, {useEffect, useState} from 'react';
import {Content} from "./Content";
import {useNotes} from "../../hooks/useNotes";
import {Spinner} from "../common/Spinner";
import {Container} from "@material-ui/core";
import {styles} from "./style";


const emptyNotes = {
    description: ''
}

export function ContentPage() {
    const [note, setNote] = useState({});
    const {notesList, isLoading, saveNotes, deleteNote} = useNotes()

    useEffect(() => {
        setNote(emptyNotes)
    }, [])

    function onEdit(editNote) {
        saveNotes(editNote)
    }

    function onAdd() {
        saveNotes(note)
    }

    function onDelete(id) {
        deleteNote(id)
    }

    return (
        <Container maxWidth='md' style={styles.root}>
            {isLoading ? <Spinner/> :
                <Content notesList={notesList} onAdd={onAdd} onDelete={onDelete} onEdit={onEdit}/>}
        </Container>
    );
}
