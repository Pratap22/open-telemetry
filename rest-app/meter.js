//meter.js

'use strict';

const { Resource } = require('@opentelemetry/resources');
const { metrics } = require('@opentelemetry/api');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-grpc');
const { MeterProvider,PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');


const meterProvider = new MeterProvider({
  resource: new Resource({'service.name': 'my-express-app'})
});

const metricExporter = new OTLPMetricExporter({
  url: "http://otel-collector:4317"
});

const metricReader = new PeriodicExportingMetricReader({
  exporter: metricExporter,
  exportIntervalMillis: 60000,
});

meterProvider.addMetricReader(metricReader);

metrics.setGlobalMeterProvider(meterProvider);

