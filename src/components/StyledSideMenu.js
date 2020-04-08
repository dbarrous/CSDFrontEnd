import React from "react";
import styled from "styled-components";
import SideMenu from "react-sidemenu";
const Wrapper = styled.div`
  .Side-menu {
   
    width: 100%;
  }
  .Side-menu .children {
    background: var(--primary);
    transition: max-height 0.7s ease-in;
    overflow: hidden;
  }
  .Side-menu .children.active {
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    max-height: 9999px;
  }
  .Side-menu .children.inactive {
    transition: max-height 0.6s cubic-bezier(0, 1, 0, 1) -0.15s;
    max-height: 0;
  }
  .Side-menu * {
    box-sizing: border-box;
  }
  .Side-menu .divider {
    height: 42px;
    padding-top: 14px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 12px;
  }
  .Side-menu.rtl .divider {
    text-align: right;
  }
  .Side-menu.rtl .item .item-title .item-label {
    float: right;
  }
  .Side-menu.rtl .item .item-title .item-icon {
    margin-right: 0px;
    margin-left: 10px;
    margin-top: 3px;
    float: right;
  }
  .Side-menu.rtl .item .item-title .fa-chevron-down,
  .Side-menu.rtl .item .item-title .fa-chevron-left,
  .Side-menu.rtl .item .item-title .fa-chevron-right {
    float: left;
  }
  .Side-menu.rtl .item .children {
    padding-left: 0;
    padding-right: 25px;
  }
  .Side-menu .item .item-title {
    height: 40px;
    padding:14px;
    :hover{text-decoration:underline;
    text-decoration-color:var(--secondary)
    }
    // padding-top: 14px;
    // padding-left: 18px;
    // padding-right: 18px;
    font-size: 14px;
    cursor: pointer !important;
  }
  .Side-menu .item .item-title .item-icon {
    margin-right: 10px;
  }
  .Side-menu .item .item-title .fa-chevron-down,
  .Side-menu .item .item-title .fa-chevron-left,
  .Side-menu .item .item-title .fa-chevron-right {
    float: right;
    position: relative;
    font-size: 12px;
    padding-top: 3px;
  }
  .Side-menu .item:hover > .item-title {
    cursor: pointer;
  }
  .Side-menu .item.item-level-1 > .item-title {
    height: 40px;

    :hover{
      text-decoration-color:var(--background);
    }
  }
  .Side-menu .item.item-level-1 {
    background: var(--secondary);
  }
  .Side-menu .item .children {
    padding-left: 25px;
  }
  .Side-menu-default {
    width: 100%;
    background-color: var(--primary);
    color: var(--background);
  }
  .Side-menu-default *:not(i) {
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 300;
  }
  .Side-menu-default .divider {
    background-color: #1a2226;
    color: #4a636e;
    text-transform: uppercase;
  }
  .Side-menu-default .item a {
    text-decoration: none;
    color: #b8c7ce;
  }
  .Side-menu-default .item.active {
    color: white;

  }
  .item.active .children.active .item.item-level-2.active span{
    
    text-decoration:underline;
    text-decoration-color:var(--secondary);
  }
  .Side-menu-default .item.active .children {
    color: #b8c7ce;
  }
  .Side-menu-default .item.active > .item-title > a {
    color: white;
    
  }
  .Side-menu-default .item:hover > .item-title {
    color: white;
   
  }
  .Side-menu-default .item:hover > .item-title a {
    color: white;
  }
  .Side-menu-default .item.item-level-1:hover > .item-title {
    transition: 0.5s ease-in-out;
    background-color: var(--secondary);
  }
  .Side-menu-default .item.item-level-1:hover,
  .Side-menu-default .item.item-level-1.active {
    border-left: 4px solid var(--secondary);

  }

  
`;

const StyledSideMenu = props => {
  return (
    <Wrapper>
      <SideMenu
        activeItem={props.activeItem}
        items={props.items}
        onMenuItemClick={props.onMenuItemClick}
      />
    </Wrapper>
  );
};
export default StyledSideMenu;
