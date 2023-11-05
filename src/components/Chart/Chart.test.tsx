import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Chart, { ChartProps } from "./Chart";

const scores = [
  {
    id: "genetic_association",
    score: 0.696,
  },
  {
    id: "somatic_mutation",
    score: 0.922,
  },
  {
    id: "known_drug",
    score: 0.122,
  },
  {
    id: "affected_pathway",
    score: 0.933,
  },
  {
    id: "literature",
    score: 0.983,
  },
  {
    id: "rna_expression",
    score: 0.197,
  },
  {
    id: "animal_model",
    score: 0.605,
  },
];

const config: ChartProps = {
  type: "bar",
  symbol: "TP53",
  scores,
};



describe("Chart", () => {
  it("renders a bar chart", () => {
    render(<Chart {...config} />);
  });

  it("renders a polar chart", () => {
    render(<Chart {...config} type="polar" />);
  });

  it("includes symbol name in chart title", () => {
    render(<Chart {...config} />);
  });

  it("shows chart labels in a readable format", () => {
    render(<Chart {...config} />);
  });
});
