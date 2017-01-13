name := "PoC Candidates Section"

version := "0.0.4"

organization := "com.talenteca"

scalaVersion := "2.11.8"

scalacOptions ++= Seq("-optimize", "-g:vars", "-deprecation", "-unchecked", "-feature", "-encoding", "utf8", "-Xmax-classfile-name", "110", "-language:higherKinds")

resolvers ++= Seq(
  "SnowPlow Repo"                   at "http://maven.snplow.com/releases/",
  "Typesafe repository releases"    at "https://repo.typesafe.com/typesafe/releases/",
  "Twitter Maven Repo"              at "https://maven.twttr.com/"
)

seq(webSettings :_*)

unmanagedResourceDirectories in Test <+= (baseDirectory) { _ / "src/main/webapp" }

libraryDependencies ++= {
  val liftVersion = "2.6.3"
  Seq(
    "net.liftweb"       %% "lift-webkit"        % liftVersion        % "compile",
    "org.eclipse.jetty" % "jetty-webapp"        % "8.1.17.v20150415"  % "container,test",
    "org.eclipse.jetty" % "jetty-plus"          % "8.1.17.v20150415"  % "container,test", // For Jetty Config
    "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" % "container,test" artifacts Artifact("javax.servlet", "jar", "jar"),
    "ch.qos.logback"    % "logback-classic"     % "1.1.3",
    "org.specs2"        %% "specs2-core"        % "3.6.4"           % "test"
  )
}

scalacOptions in Test ++= Seq("-Yrangepos")
