const  Currency = require("../sql/models/Currency");
const {Op, where} = require('sequelize');
const e = require("express");


exports.findAll = async() => {
  Currency.findAll().then(res=>{
        return res;
    })

};