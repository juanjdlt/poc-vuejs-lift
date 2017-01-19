package code.lib

import net.liftweb.http.rest.RestHelper
import net.liftweb.http.OkResponse
import net.liftweb.util.Helpers.AsInt
import net.liftweb.json._
import net.liftweb.json.JsonDSL._


object restAPI extends RestHelper {

  def processMessage(jsonData: JValue): JValue = {
    val msg = (jsonData \ "msg").extract[String]
    val response = msg + "_" + System.currentTimeMillis.toString 
    ("data" -> response)
  }

  serve {
    case "api" :: "message" :: Nil JsonPost ((jsonData, req)) => processMessage(jsonData)
  }
  
}