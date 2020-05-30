import * as React from "react";
import PostIcon from "@material-ui/icons/Book";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate, PostShow } from "./product";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import simpleRestProvider from "ra-strapi-rest";

const App = () => (
  <Admin
    dataProvider={simpleRestProvider("http://192.168.99.109:1337")}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="products"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
  </Admin>
);
export default App;
