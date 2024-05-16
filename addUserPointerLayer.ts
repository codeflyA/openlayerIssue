import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
export function addUserPointerLayer({
  latitude,
  longitude,
  zIndex,
}: {
  latitude: number | string;
  longitude: number | string;
  zIndex: number;
}) {
  let vectorSource = new VectorSource();
  let carFeature = new Feature({
    geometry: new Point([Number(longitude), Number(latitude)]),
  });
  vectorSource.addFeature(carFeature);
  let oneCarPointerLayer = new VectorLayer({
    source: vectorSource,
    zIndex,
  });
  return oneCarPointerLayer;
}
