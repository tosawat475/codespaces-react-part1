import React, { useState } from 'react';
import './Hello.css';
export default function Hello({name,lastname = "Jaidee",age = "25"}) {
    return (<><h1>Hello world {name} {lastname} {age}</h1></>    
    );
}
