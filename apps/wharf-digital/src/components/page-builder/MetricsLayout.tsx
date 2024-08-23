import { css } from 'styled-system/css';

import type { LayoutMetrics } from '@/lib/sanity/types';

type MetricsLayoutProps = LayoutMetrics;

export const MetricsLayout = (props: MetricsLayoutProps) => {
  const { metrics } = props;

  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {metrics.map((metric) => {
        return (
          <div key={metric._key}>
            {metric.value && <h2>{metric.value}</h2>}

            {metric.label && <span>{metric.label}</span>}
          </div>
        );
      })}
    </section>
  );
};
