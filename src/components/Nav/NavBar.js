import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Layout, Menu, Input, Button,Icon} from "antd";
import Logout from "../logout/logout";

const Search = Input.Search;

export default class NavBar extends Component {
  state = {
    isLogged: false,
    menu_class: "",
    search: ""
  }
  
  checkLogged = () => {
    let loggedUrl = 'http://localhost:3000/auth/loggedin'
    axios
      .get(loggedUrl, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true, user: res.data.user }, state => {});
      })
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.checkLogged();
  }

  
  render() {
    let { isLogged } = this.state;
    
    return (
      <Layout className="layout">
        
          

          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys ={[]}  
            style={{
              lineHeight: "45px",
              padding: "7px 5px",
              color: "white",
              display: "flex",
              justifyContent: "space-around"
            }}
            
          >
            <Menu.Item key="Logo">
              <Link to={"/"}>
              <img className="logo" alt="logo" src="logo2.PNG" ></img>
              </Link>
            </Menu.Item>
            <Menu.Item key="search">
            <Search
              placeholder="Buscar"
              onSearch={value => console.log(value)}
              style={{ width: 300 }}
            />
             </Menu.Item>
            {isLogged ? (
              <>
              <Menu.Item key="Perfil">
                  <Link to={"/profile"}>
                  <Icon type="user" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="salir">
                  <Logout/>
                  
                </Menu.Item>

                  <Menu.Item key="publicar">
                <Link to={"/publicar"}>
                  <Button type="primary">Publicar</Button>
                </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="Iniciar Sesión">
                  <Link to={"/login"}>Iniciar Sesión</Link>
                </Menu.Item>

                <Menu.Item key="registro"> 
                <Link to={"/signup"}>
                  <Button type="primary">Registrate</Button>
                </Link>
                </Menu.Item>
              </>
            )}
          </Menu>
        
      </Layout>
    );
  }
}
