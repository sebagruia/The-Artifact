import styles from "./SearchForm.module.css";
import Router from "next/router";

const SearchForm = (props) => {
  const {
    country,
    categoryValue,
    keyword,
    onChangeCountry,
    onChangeCategory,
    onChangeKeyword,
  } = props;

  const handleSubmit = (event, country, categoryValue, keyword) => {
    event.preventDefault();
    if (country === "" && categoryValue === "" && keyword === "") {
      window.alert("Fill at Least one Field");
    } else {
      Router.push({
        pathname: "/search",
        query: {
          country: country,
          categoryValue: categoryValue,
          keyword: keyword,
        },
      });
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={(event) => handleSubmit(event, country, categoryValue, keyword)}
    >
      <div className={styles.inputContainerSelect}>
        <label htmlFor="country" className={styles.country}>
          Country
        </label>
        <select
          className={styles.select}
          value={country}
          onChange={(event) => onChangeCountry(event)}
          id="country"
          name="country"
        >
          <option value="">--select country--</option>
          <option value="au">Australia</option>
          <option value="at">Austria</option>
          <option value="br">Brasil</option>
          <option value="ca">Canada</option>
          <option value="cn">China</option>
          <option value="cu">Cuba</option>
          <option value="de">Deutschland</option>
          <option value="fr">France</option>
          <option value="hu">Hungary</option>
          <option value="nl">Netherlands</option>
          <option value="pt">Portugal</option>
          <option value="ro">Romania</option>
          <option value="ru">Rusia</option>
          <option value="rs">Serbia</option>
          <option value="il">Israel</option>
          <option value="it">Italy</option>
          <option value="gb">United Kingdom</option>
          <option value="us">United States</option>
        </select>
      </div>

      <div className={styles.inputContainerSelect}>
        <label htmlFor="category" className={styles.category}>
          Category
        </label>
        <select
          className={styles.select}
          value={categoryValue}
          onChange={(event) => onChangeCategory(event)}
          id="category"
          name="category"
        >
          <option value="">--select category--</option>
          <option value="business">business</option>
          <option value="entertainment">entertainment</option>
          <option value="general">general</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </select>
      </div>
      <div className={styles.inputContainerText}>
        <label htmlFor="keyword">Keyword</label>
        <input
          className={styles.inputText}
          value={keyword}
          onChange={(event) => onChangeKeyword(event)}
          type="text"
          id="keyword"
          name="keyword"
          placeholder="search word"
        />
      </div>
      <div className={styles.submitContainer}>
        <input
          className={styles.inputSubmit}
          type="submit"
          value="Get Your News"
        />
      </div>
    </form>
  );
};

export default SearchForm;
