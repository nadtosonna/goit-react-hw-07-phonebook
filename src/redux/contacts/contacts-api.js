import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const contactsApi = createApi({
    reducerPath: "contactsApi",
    tagTypes: ["Contacts"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://635ba2ddaa7c3f113dc213c8.mockapi.io/api/contactlist"
    }),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => '/',
            providesTags: (result) => result ? [
                ...result.map(({id}) => ({type: "Contacts", id})), 
                {type: "Contacts", id: "LIST"}
            ] : [{type: "Contacts", id: "LIST"}]
        }),
        addContact: builder.mutation({
            query: ({name, number}) => ({
                url: "/",
                method: "POST",
                body: {
                    name,
                    number,
                },
            }),
            invalidatesTags: [{type: "Contacts", id: "LIST"}]
        }),
        removeContact: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Contacts", id: "LIST"}]
        })
    })
})

export const { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;

export default contactsApi;