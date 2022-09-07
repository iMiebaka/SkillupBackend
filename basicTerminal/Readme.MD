# AWK

Awk is a scripting language used for manipulating data and generating reports. The awk command programming language requires no compiling and allows the user to use variables, numeric functions, string functions, and logical operators. 


```
cat fileOne.txt | awk '{print}'
```
This will print all


```
cat fileOne.txt | awk '{print NF}'
```
This will print the last text fileOne


```
cat fileOne.txt | awk '{print $1, $4}'
```
This will print the first and last value


```
cat fileOne.txt | awk '/lorem/{print}'
```
This will print the first and last value


