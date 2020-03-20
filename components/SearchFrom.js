import { Fragment } from "react";

const SearchForm = ({
  onChangeCountry,
  onChangeCategory,
  onChangeKeyword,
  onSubmit,
  countryValue,
  categoryValue,
  keyword
}) => {

  const generateOptionTag = ()=>{
  const optionTagArray = ()=>{
    for(country of countries ){
      <option value="ar">Argentina</option>
    }
  }
 
  }
  return (
    <Fragment>
      <form onSubmit={event => onSubmit(event)}>
        <div className="input-container-select ">
          <label htmlFor="country" className="country">
            Country
          </label>
          <select
            value={countryValue}
            onChange={event => onChangeCountry(event)}
            id="country"
            name="country"
          >
            <option value="">--select country--</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="ca">Canada</option>
            <option value="cu">Cuba</option>
            <option value="de">Deutschland</option>
            <option value="fr">France</option>
            <option value="ro">Romania</option>
            <option value="ru">Rusia</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </div>

        <div className="input-container-select">
          <label htmlFor="category" className="category">
            Category
          </label>
          <select
            value={categoryValue}
            onChange={event => onChangeCategory(event)}
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
        <div className="input-container-text">
          <label htmlFor="keyword">Keyword</label>
          <input
            value={keyword}
            onChange={event => onChangeKeyword(event)}
            type="text"
            id="keyword"
            name="keyword"
            placeholder="search word"
          />
        </div>
        <div className="submit-container">
          <input type="submit" value="Get Your News" />
        </div>
      </form>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        form {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          margin: 0 auto;
        }
        .input-container-select,
        .input-container-text {
          width: 250px;
        }
        .input-container-select .country {
          margin-right: 10px;
        }
        form label {
          margin: 0px 5px 0 0px;
        }
        input[type="text"],
        select {
          width: 75%;
          padding: 5px 20px;
          margin-right: 10px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .submit-container {
          width: 150px;
        }
        input[type="submit"] {
          width: 100%;
          background-color: #fff;
          color: #000;
          padding: 5px 0;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="submit"]:hover {
          background-color: #cccccc;
        }

         {
          /* =====LOCAL STYLES Media Queries===== */
        }
        @media screen and (max-width: 768px) {
          form {
            width: 250px;
          }
          .submit-container {
            width: 250px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default SearchForm;
