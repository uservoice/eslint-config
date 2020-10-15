import React, { ReactElement } from 'react';

// Failing lint rule
export function TailwindRuleTestFail (): ReactElement {
  return (
    // Remove the next line to test lint warning
    // eslint-disable-next-line tailwind/class-order
    <div className="border rounded fixed bg-green-500 relative" />
  );
}

// Successful lint rule (fixed with eslint --fix)
export function TailwindRuleTestSuccess (): ReactElement {
  return (
    <div className="fixed relative bg-green-500 border rounded" />
  );
}
