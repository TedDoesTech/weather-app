import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: "1111111",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: "30",
    wind: {
      speed: 17,
      direction: "stub",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
