import ReactDOM from "react-dom";
import styled from "styled-components";

//icons
import { CgClose } from "react-icons/cg";

const Checkout = ({ close, title }) => {
  return ReactDOM.createPortal(
    <Container>
      <div className="content">
        <div className="header">
          <p>{title}</p>
          <CgClose className="icon" onClick={() => close()} />
        </div>
        <div className="method">
          <p>Select Payment Method</p>
          <div className="row">
            <div className="one">
              <img src="/images/paypal.png" alt="Paypal" />
            </div>
            <div className="one">
              <img src="/images/visa.png" alt="Visa" />
            </div>
          </div>
        </div>
        <form>
          <div className="column">
            <label htmlFor="number">Card Number</label>
            <input type="text" placeholder="1234 1234 1234 1234" />
          </div>
          <div className="row">
            <div className="column margin">
              <label htmlFor="date">Expiry</label>
              <input type="text" placeholder="MM / YY" />
            </div>
            <div className="column">
              <label htmlFor="cvc">CVC</label>
              <input type="text" placeholder="CVC" />
            </div>
          </div>
          <div className="row">
            <div className="column margin">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="United State">United States</option>
              </select>
            </div>
            <div className="column">
              <label htmlFor="code">Postal Code</label>
              <input type="text" placeholder="90210" />
            </div>
          </div>
          <button>Pay</button>
        </form>
      </div>
      <div className="background" onClick={() => close()} />
    </Container>,
    document.getElementById("portal")
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 600px;
    z-index: 100;
    padding: 20px;
    height: 600px;
    position: absolute;
    border-radius: 10px;
    background: var(--gray);

    .header {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1.3em;
        font-weight: 700;
      }

      .icon {
        font-size: 1.6em;
        cursor: pointer;
      }
    }

    .method {
      width: 100%;
      height: 150px;
      display: flex;
      margin-top: 10px;
      flex-direction: column;

      p {
        margin-bottom: 20px;
      }

      .row {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;

        .one {
          width: 150px;
          height: 100px;
          display: flex;
          cursor: pointer;
          margin-right: 20px;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--darkish);

          img {
            width: 50px;
          }
        }
      }
    }

    form {
      width: 100%;
      height: auto;
      margin-top: 20px;

      input,
      select {
        height: 45px;
        width: 100%;
        border: none;
        outline: none;
        margin-top: 5px;
        border-radius: 4px;
        padding: 0 0 0 10px;
        background: var(--white);
      }

      .column {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .margin {
        margin-right: 10px;
      }

      .row {
        width: 100%;
        height: auto;
        display: flex;
        margin: 20px 0;
        flex-direction: row;
        align-items: flex-start;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border: none;
      color: var(--white);
      border-radius: 4px;
      background: var(--bright);
    }
  }

  .background {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: black;
  }
`;

export default Checkout;
