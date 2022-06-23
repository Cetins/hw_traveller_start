const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.forEach(journey => startLocations.push(journey.startLocation));
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
  this.journeys.forEach(journey => endLocations.push(journey.endLocation));
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((previousDistance, currentDistance) => {
    return previousDistance + currentDistance.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = [];
  this.journeys.forEach(journey => modesOfTransport.push(journey.transport));
  uniqueModesOfTransport = [...new Set(modesOfTransport)];
  return uniqueModesOfTransport;
};

module.exports = Traveller;
