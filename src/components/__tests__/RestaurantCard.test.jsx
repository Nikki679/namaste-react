import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../../Mock/ResturantCardMockData.json";
import ResturantCard from "../ResturantCard";
import "@testing-library/jest-dom";

test("Should render the Resturant card with props data",() => {
    render(<ResturantCard res_data={MOCK_DATA} />)
    const title = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect(title).toBeInTheDocument();
})
