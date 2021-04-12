import {useCallback, useEffect, useState} from 'react';
import {getData, addData, deleteData, updateData} from "../services/services";

export function useNotes() {
    const [notesList, setNotesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getNotes = useCallback(() => {
        setIsLoading(true)
        getData().then(({data}) => {
            setNotesList(data)
            setIsLoading(false)
        })

    }, [setNotesList])

    const saveNotes = useCallback((note) => {
        setIsLoading(true)
        if (note.id) {
            updateData(note).then(({data}) => {
                setNotesList((notesList) => notesList.map((item) => item.id === data.id ? data : item))
                setIsLoading(false)
            })
        } else {
            addData(note).then(({data}) => {
                setNotesList((notesList) => [...notesList, data])
                setIsLoading(false)
            })
        }


    }, [setNotesList])

    const deleteNote = useCallback((id) => {
        setIsLoading(true)
        deleteData(id).then(() => {
            setNotesList((notesList) => notesList.filter((item) => item.id !== id))
            setIsLoading(false)
        })

    }, [setNotesList])


    useEffect(getNotes, [setNotesList])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        notesList,
        isLoading,
        saveNotes,
        deleteNote
    }
}

