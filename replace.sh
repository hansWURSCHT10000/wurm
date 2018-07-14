#!/bin/bash

sed s'/"/\\u0022/g'|    #  &quot;  
sed s'/§/\\u00A7/g'|    #  &sect;  
sed s'/&/\\u0026/g'|    #  &amp;   
sed s'/ß/\\u00df/g'|    #  &szlig; 
sed s'/´/\\u00b4/g'|    #  &acute; 
sed s'/</\\u003c/g'|    #  &lt;    
sed s'/>/\\u003e/g'|    #  &gt;    
sed s'/°/\\u00b0/g'    #  &deg;   
