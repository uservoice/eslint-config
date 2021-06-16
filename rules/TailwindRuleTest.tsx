import React, { ReactElement } from 'react';

// Failing lint rule
export function TailwindRuleTestFail (): ReactElement {
  return (
    // Remove the next line to test lint warning
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="border rounded fixed bg-green-500 relative" />
  );
}

// Successful lint rule (fixed with eslint --fix)
export function TailwindRuleTestSuccess (): ReactElement {
  return (
    <div className="relative bg-green-500 rounded border" />
  );
}
