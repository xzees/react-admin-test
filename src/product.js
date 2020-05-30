import * as React from "react";
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Filter
} from "react-admin";

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="detail" />
      <TextField source="type" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="code" />
      <TextInput source="detail" />
      <TextInput source="type" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="code" />
      <TextInput source="detail" />
      <TextInput source="type" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="detail" />
      <TextField source="type" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);
