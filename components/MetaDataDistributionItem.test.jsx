import { render, screen } from "@testing-library/react";
import MetadataDistributionItem from "./MetadataDistributionItem";
import dataFromGraphql from "@/data/graphql";
import colors from 'tailwindcss/colors';

const hex2rgba = (hex) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgb(${r}, ${g}, ${b})`;
  };
  
describe("MetadataDistributionItem", () => {
  const build = (props) => {
    const item = dataFromGraphql.app.metadataDistributions[0];

    return render(
      <MetadataDistributionItem
        name={item.name}
        total={item.total}
        unique={item.unique}
        data={item.distributions}
        color={colors.blue}
        {...props}
      />
    );
  };

  it("renders a metadata distribution item", () => {
    build();

    expect(screen.getByText("hostname (10)")).toBeInTheDocument();
  });

  it('should render correct amount of bar sections', async () => {
    build();
    const barSections = await screen.findAllByRole('link');

    expect(barSections).toHaveLength(10);
  });

  it('should have correct width of the bar section', async () => {
    build({
        total: 100,
        data: [{
            key: 'f1',
            value: 65
        }, {
            key: 'f2',
            value: 35
        }]
    });

    const barSections = await screen.findAllByRole('link');

    expect(barSections[0].style.width).toBe('65%');
    expect(barSections[1].style.width).toBe('35%');
  })

  it('should have correct background colors', async() => {
    build();
    const barSections = await screen.findAllByRole('link');

    // temporary solution to use hex2rgba, as testing library is returning rba colors
    expect(barSections[2].style.backgroundColor).toBe(hex2rgba(colors.blue[700]));
  });
});