# pdfmakecustomfont
### How to add server side custom font inside a pdf page with pdfmake 

#### To run type following commands
```
npm install

node index.js
```


Reference:
[Pdf make issue](https://github.com/bpampuch/pdfmake/issues/1659)


### How to add client side custom font inside a pdf page with pdfmake 
1. #### Add new fonts
Copy this  [shell script](https://pdfmake.github.io/docs/fonts/custom-fonts-client-side/shell/)

Create a folder and copy new fonts you wish to add,

Add the default fonts supported by pdfmake from [here](https://github.com/bpampuch/pdfmake/tree/master/examples/fonts) 

run the shell script to generate vfs_fonts.js

How to use script:
```
sh script.sh font1.ttf font2.ttf font3.ttf
```
for example 
```
sh script.sh Roboto-Italic.ttf Roboto-Medium.ttf Roboto-MediumItalic.ttf Roboto-Regular.ttf Consolas.ttf sampleImage.jpg CONSOLAB.TTF
```
2. #### Replace old vfs_fonts.js with the file created

3. #### Define the fonts
```
pdfMake.fonts = {
        Roboto: {
                normal: 'Roboto-Regular.ttf',
                bold: 'Roboto-Medium.ttf',
                italics: 'Roboto-Italic.ttf',
                bolditalics: 'Roboto-MediumItalic.ttf'
        },
                Consolas: {
                 normal: 'Consolas.ttf',
                 bold: 'CONSOLSB.TTF',
                 italics: 'Consolas.ttf',
                 bolditalics: 'Consolas.ttf'
   },
};
```
4. #### Use the font
```
docDefinition.push({
                columns:[
                  {
                    text: [
                      { text:candidate_name+"\n", fontSize: 10, bold:false},
                      { text:"DifferentFont : ",fontSize: 9,bold:false},
                      { text: differentData.data[k].passcode+"\n" ,fontSize: 11,font:'Consolas',bold:true},

                    ],
                    width: 150,
                    margin:[7,15,7,0]
                  },
                  {
                    image:candidate_img,
                    fit:[70,70],
                    width: 80,
                    margin:[15,5,0,0]
                  }
                ]
              });
pdfMake.createPdf(docDefinition)
```

 
Reference:
[PDFmake document clientside add font](https://pdfmake.github.io/docs/fonts/custom-fonts-client-side/)
