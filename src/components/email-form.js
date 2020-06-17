import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formItem: {
    marginBottom: '15px',
    width: '100%',
  },
  talkingPoints: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  talkingPoint: {
    fontSize: '14px',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      boxSizing: 'border-box',
      paddingRight: '25px'
    },
  },
  root: {
    fontSize: 'inherit',
    lineHeight: 1,
  }
}));

const EmailForm = ({emails, talkingPoints}) => {
  const classes = useStyles();

  const [subject, setSubject] = useState();
  const [subjectTouched, setSubjectTouched] = useState(false);
  const [subjectError, setSubjectError] = useState();

  const [aboutMe, setAboutMe] = useState();

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

      const email = [aboutMe, emailBody].join('\n\n');
      setLink(`MailTo:${emails.join(',')}?subject=${subject}&body=${escape(email)}`);
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
  }, [subject, subjectTouched, emailBody, emailBodyTouched, aboutMe, emails]);

  return (
    <div>
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
        label="About Me"
        placeholder="Include name, where you live, any ties you have to the issue, etc."
        variant="outlined"
        multiline
        rows={2}
        onChange={e => setAboutMe(e.target.value)}
      />
      <ul className={classes.talkingPoints}>
        {
          talkingPoints.map((point, idx) => (
            <li key={idx} className={classes.talkingPoint}>
              <Typography variant="body2" classes={{ root: classes.root }}>{point}</Typography>
            </li>
          ))
        }
      </ul>
      <TextField
        className={classes.formItem}
        label="Email Body"
        placeholder="See above for some ideas of talking points to include in your email."
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
    </div>
  )
}

export default EmailForm;
