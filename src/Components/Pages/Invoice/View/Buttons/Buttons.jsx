import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export default function BasicButtons() {
  return (
    <Stack spacing={1.5} direction="row" sx={{mb: 4, ml: 6}}>
      <a href="/pages/myInvoices" style={{textDecoration: 'none'}}><Button variant="outlined" sx={{textTransform: 'capitalize', backgroundColor: 'white', color: 'black', borderRadius: '2rem', borderColor: 'black', textDecoration: 'none'}}><KeyboardBackspaceIcon/>&nbsp;Back</Button></a>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><ReceiptIcon sx={{fontSize: '100%'}}/> &nbsp;Edit</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><ContentCopyRoundedIcon sx={{fontSize: '100%'}}/> &nbsp;Copy</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><FileDownloadOutlinedIcon sx={{fontSize: '100%'}}/> &nbsp;Download</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><DeleteOutlineIcon sx={{fontSize: '100%'}}/>&nbsp;Delete</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><MailOutlineOutlinedIcon sx={{fontSize: '100%'}}/>&nbsp;Send by email</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><CreditCardOutlinedIcon sx={{fontSize: '100%'}}/>&nbsp;Payments</Button>
    </Stack>
  );
}
