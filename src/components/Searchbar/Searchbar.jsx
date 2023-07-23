import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit, clearPage }) => {
  const [picturesName, setPicturesName] = useState('');

  const handlePictureChange = event => {
    setPicturesName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (picturesName.trim() === '') {
      return toast.error('non name');
    }
    onSubmit(picturesName);
    setPicturesName('');
    clearPage();
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLable}>
            <FcSearch size="20" />
          </span>
        </button>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handlePictureChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
