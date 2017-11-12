import xml2js from 'react-native-xml2js';
import parse5 from 'react-native-parse-html';
import React, { Component } from 'react';
var parser = new xml2js.Parser();
var psr = new parse5.ParserStream();

export default class PriceConsultor extends Component {
    static fetchPrices() {
        return fetch('https://www.mic.gob.do/combustibleRSS.xml')
        .then((response) => 
            parser.parseString(response._bodyText, function (err, result) {
            let res = parse5.parse(result.rss.channel[0].item[0].description[0])
            console.log(res.childNodes[0].childNodes[1]);
            console.log('Done');
        })
    ) 
        .catch((error) => {
          console.error(error);
        });
    }
} 