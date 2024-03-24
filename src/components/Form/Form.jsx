import styles from './Form.module.css';
import Input from '../Input/Input';
import { useState } from 'react';
import FoxColorIcon from '../../icons/FoxColorIcon';
import DiscordColorIcon from '../../icons/DiscordColorIcon';
import FormButton from '../FormButton/FormButton';

const DEFAULT_VALUES = {
  discord: '',
  fox: '',
};
const Form = () => {
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const [errors, setErrors] = useState(DEFAULT_VALUES);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormValues = (event) => {
    const { value, name } = event.target;
    setErrors(DEFAULT_VALUES);
    setIsSubmitted(false);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const discordUsernameRegex = /^@[a-zA-Z0-9_]+$/;
    const isDiscordValid = discordUsernameRegex.test(formValues.discord);
    if (!isDiscordValid) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        discord: 'wrong discord',
      }));
    }

    const addressRegex = /^[a-zA-Z0-9\s,'-]+$/;
    const isAddressValid = addressRegex.test(formValues.fox);
    if (!isAddressValid) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        fox: 'wrong address',
      }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitted!');
      setIsSubmitted(true);
      setErrors(DEFAULT_VALUES);
    }
  };

  return (
    <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
      <Input
        onChange={(e) => handleFormValues(e)}
        error={errors.discord}
        value={formValues.discord}
        name="discord"
        Icon={DiscordColorIcon}
        placeholder="@username"
      />
      <Input
        onChange={(e) => handleFormValues(e)}
        error={errors.fox}
        value={formValues.fox}
        name="fox"
        Icon={FoxColorIcon}
        placeholder="Wallet address"
      />
      <FormButton>
        {!isSubmitted && !errors.discord && !errors.discord && 'Mint'}
        {isSubmitted && 'Minted'}
        {(errors.discord || errors.fox) && 'Error'}
      </FormButton>
    </form>
  );
};

export default Form;

