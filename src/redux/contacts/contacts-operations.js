import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import * as api from '../../shared/api/contacts';

const isExisting = ({name, number}, contacts) => {
    const normalizedName = name.toLowerCase();

    const result = contacts.find(contact => {
        return (normalizedName === contact.name.toLowerCase() && number === contact.number.toLowerCase())
    });
    return Boolean(result);
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
    
export const addContact = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isExisting(data, contacts.contacts)) {
                Notify.failure('This contact already exists!')
            }
        }
    }
);

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async (id, { rejectWithValue }) => {
        try {
            await api.removeContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
