import { useQuery } from "@apollo/client";

import TargetTable from "../components/TargetTable";
import { DISEASE_QUERY } from "../graphql/queries/disease";
import { AssociatedTarget } from "../types";

function TargetPage() {
  const { loading, error, data } = useQuery(DISEASE_QUERY, {
    variables: { limit: 100 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const MAX_ITEMS_TO_DISPLAY = 10;
  const { rows }: { rows: AssociatedTarget[] } = data.disease.associatedTargets;
  console.log(rows);
  const filteredData = [...rows]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ITEMS_TO_DISPLAY);
  console.log(filteredData);

  return (
    <div className="uk-container">
      <h1 className="uk-margin-top">Genes associated with lung carcinoma</h1>

      <TargetTable data={filteredData} />
    </div>
  );
}

export default TargetPage;
