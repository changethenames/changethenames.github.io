import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formItem: {
    marginBottom: '15px',
    width: '100%',
  },
}));

const EmailForm = ({emails, talkingPoints}) => {
  const classes = useStyles();

  const [subject, setSubject] = useState();
  const [subjectTouched, setSubjectTouched] = useState(false);
  const [subjectError, setSubjectError] = useState();
  
  const [emailBody, setEmailBody] = useState();
  const [emailBodyTouched, setEmailBodyTouched] = useState(false);
  const [emailBodyError, setEmailBodyError] = useState();
  const [formValid, setFormValid] = useState(false);

  const [link, setLink] = useState('');

  useEffect(() => {
    if (subject && emailBody) {
      setSubjectError(null);
      setEmailBodyError(null);

      setFormValid(true);
      setLink(`MailTo:${emails.join(',')}?subject=${subject}&body=${emailBody}`);
    } else {
      setFormValid(false);
      if (!subject && subjectTouched) {
        setSubjectError('Subject is required');
      } else {
        setSubjectError(null);
      }
      if (!emailBody && emailBodyTouched) {
        setEmailBodyError('Email body is required');
      } else {
        setEmailBodyError(null);
      }
    }
  }, [subject, subjectTouched, emailBody, emailBodyTouched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subject);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.formItem}
        label="Subject"
        variant="outlined"
        error={!!subjectError}
        helperText={subjectError}
        onChange={e => setSubject(e.target.value)}
        onBlur={() => {
          setSubjectTouched(true);
        }} 
      />
      <TextField
        className={classes.formItem}
        label="Email Body"
        variant="outlined"
        multiline
        rows={4}
        error={!emailBody && emailBodyTouched}
        helperText={emailBodyError}
        onChange={e => setEmailBody(e.target.value)}
        onBlur={() => {
          setEmailBodyTouched(true);
        }} 
      />
      <Button variant="contained" color="secondary" href={link} disabled={!formValid}>
        Send Email
      </Button>
    </form>
  )
}

export default EmailForm;
