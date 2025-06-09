import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { 
  PasswordForm, 
  ChangeTitle,
  Input, 
  ConfirmInput, 
  UpdateButton, 
  ConfirmText,
  EyeOne } from './Styling';

export const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const userId = useSelector(store => store.profile.userId);
  const accessToken = useSelector(store => store.profile.accessToken);


  // PATCH for updating password
  // Setting different response messages
  const onUpdatePassword = (e) => {
    e.preventDefault();

    if (newPassword === confirmedPassword) {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        },
        body: JSON.stringify({ password, newPassword }),
      }
      fetch(
        `https://citizen-ship.herokuapp.com/citizen/${userId}/password`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSuccess(true);
            setNoMatch(false);
            setFail(false);
            setPassword('');
            setNewPassword('');
            setConfirmedPassword('');
          } else {
            setFail(true);
            setNoMatch(false);
          } 
        })
      } else {
        setNoMatch(true);
        setFail(false);
      }
  };

const togglePassword = () => {
  if (!showPassword) setShowPassword(true);
  else setShowPassword(false);
};

  return (
    <PasswordForm onSubmit={onUpdatePassword}>
      <ChangeTitle>Change your password:</ChangeTitle>
      <Input 
        type={showPassword ? 'password' : 'text'}
        placeholder='current password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <ConfirmInput>
        <Input
          type={showPassword ? 'password' : 'text'}
          placeholder='new password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} />
        <Input
          type={showPassword ? 'password' : 'text'}
          placeholder='confirm password'
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)} />
      </ConfirmInput>
      <EyeOne type='button' onClick={togglePassword}>
        {showPassword ? (
          <FaEye />
        ) : (
          <FaEyeSlash />
        )}
      </EyeOne>
      <ConfirmText success={success}>{noMatch ? 'Passwords do not match' : ''}</ConfirmText>
      <ConfirmText success={success}>{fail ? 'Could not update password right now' : ''}</ConfirmText>
      <ConfirmText success={success}>{success ? 'Password successfully updated!' : ''}</ConfirmText>
      <UpdateButton type='submit'>Update password</UpdateButton>
    </PasswordForm>
  )
};
