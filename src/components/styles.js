import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
    form :{
        width: '40rem',
        margin: '2rem auto',
        
        '& label': {
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
          },

          '& input' :{
            display: 'block',
            width: '100%',
            font: 'inherit',
            fontSize: '1.5rem',
            padding: '0.5rem',
            borderRadius: 4,
            backgroundColor: '#f7f5ef',
            border: 'none',
            borderBottom: '2px solid #494844',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginBottom: '0.5rem'
          },

          '& button': {
            font: 'inherit',
            backgroundColor: '#ebb002',
            border: '1px solid #ebb002',
            color: '#201d0f',
            padding: '0.5rem 1.5rem',
            borderRadius: 4,
            cursor: 'pointer',
        '&:hover':{
            backgroundColor: '#ebc002',
            borderColor: '#ebc002'
          },
        '&:active': {
            backgroundColor: "#ebd003",
            borderColor: '#ebc002'
          }
        }
        }
})