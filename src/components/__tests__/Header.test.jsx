import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

test("should render the header component", () => {
  render(
    <BrowserRouter>
     <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
});

test("should render the header component with cart item", () => {
    render(
      <BrowserRouter>
       <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()
  });

  test("should change the login button to logout on Click", () => {
    render(
      <BrowserRouter>
       <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name:'Login'})
        fireEvent.click(loginBtn)
        const logoutBtn = screen.getByRole("button",{name:'Logout'})
    expect(logoutBtn).toBeInTheDocument()
  });

