import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: "1111111",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct value for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    const formattedDate = new Date(validProps.date).toDateString();

    expect(getByText(formattedDate)).toHaveAttribute("class", "forecast-summary__date");
    expect(getByText("Stub description")).toHaveAttribute("class", "forecast-summary__description");
    expect(getByTestId("forecast-icon")).toHaveAttribute("class", "forecast-summary__icon");
    expect(getByText("22°C")).toHaveAttribute("class", "forecast-summary__temperature");
  });
});
