/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Matthew Peters
 * @license MIT
 *
 **/

class EasyHTTP {
	// Make an HTTP GET Request
	get(url) {
		fetch(url).then((res) => res.json()).then((data) => data).catch((err) => err);
	}
};
