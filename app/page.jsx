"use client";

import Image from "next/image";
import { useState } from "react";

import { boredify } from "@/utils/boredify";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [boringLevel, setBoringLevel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBoredify = () => {
    // Logic to handle the boredify action
    setLoading(true);
    setInput(""); // Clear input field
    setOutput(""); // Clear output field
    if (!input.trim()) {
      setLoading(false);
      setOutput("Please enter some text to boredify.");
      return;
    }
    // Simulate a processing delay
    // In a real application, you would replace this with an API call or some processing logic

    try {
      const result = boredify(input, boringLevel);
      setOutput(result);
    } catch (error) {
      console.error("Error processing input:", error);
      setOutput("An error occurred while processing your input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>BOREDIFY™</h1>
        <h2>PROFESSIONAL TEXT REALIGNMENT SYSTEM</h2>
        <div className="subtitle">
          Department of Semantic Integrity • Form 18B Interface • Est. 1962
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          Section 1A: Input Parameters & Classification
        </div>
        <div className="section-content">
          <div className="form-group">
            <label className="form-label">
              Casual Text Input (Required for Processing)
              <div className="tooltip">
                Section 1A.1: Raw textual content requiring professional
                realignment per Department Standard Operating Procedure 847-B.
                Maximum 2,500 characters per ISO 9001 Certified Processing
                Guidelines. Content will be evaluated for informality threshold
                violations using our proprietary BORING-MATIC™ algorithm
                developed in 1967.
              </div>
            </label>
            <textarea
              className="form-input"
              id="inputText"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter casual text requiring professional restructuring per Regulation 42-C..."
            ></textarea>
          </div>

          <button className="process-button" onClick={handleBoredify}>
            ⚡ SUBMIT FOR LINGUISTIC REALIGNMENT ⚡
          </button>

          <div className="compliance-bar">
            <div className="compliance-label">
              Formality Compliance Assessment Dashboard
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">
              87% Compliance • Based on ISO 9001 Framework • Rev. 1968
            </div>
          </div>

          <div
            className="form-section"
            id="outputSection"
            style={{ display: output ? "block" : "none" }}
          >
            <div className="section-header">
              Section 2C: Processed Output Documentation & Certification
            </div>
            <div className="section-content">
              <div className="output-panel">
                <div className="memo-header">
                  <strong>═══ INTERNAL MEMORANDUM ═══</strong>
                  <br />
                  SUBJECT: Casual Statement Rephrasing & Linguistic Realignment
                  <br />
                  DATE: <span id="currentDate"></span>
                  <br />
                  REFERENCE: BOREDIFY-1968-0612-ALPHA
                  <br />
                  CLASSIFICATION: Standard Processing - Form 18B
                  <br />
                  DEPARTMENT: Semantic Integrity Division CLASSIFICATION:
                  Standard Processing - Form 18B
                  <br />
                  <div className="memo-content" id="outputText">
                    {output
                      ? output
                      : "Upon careful consideration and thorough evaluation of the aforementioned proposal, it is the considered recommendation of this department that we proceed with the systematic implementation of said initiative, given the favorable preliminary assessment of its potential operational benefits and strategic implications."}
                  </div>
                  <div className="stamps">
                    <div className="stamp">✅ APPROVED FOR DISTRIBUTION</div>
                    <div className="stamp confidential">
                      🔒 CONFIDENTIAL PROCESSING
                    </div>
                    <div className="stamp warning">
                      🛑 TONE ADJUSTED: INFORMALITY THRESHOLD EXCEEDED
                    </div>
                  </div>
                </div>

                <div className="audit-panel">
                  <div
                    className="audit-header"
                    onClick={() => {
                      const content = document.getElementById("auditContent");
                      const toggle = document.getElementById("auditToggle");
                      if (content.style.display === "none") {
                        content.style.display = "block";
                        toggle.textContent = "▲";
                      } else {
                        content.style.display = "none";
                        toggle.textContent = "▼";
                      }
                    }}
                  >
                    🔍 COMPLETE PROCESS AUDIT TRAIL & DOCUMENTATION
                    <span id="auditToggle">▼</span>
                  </div>
                  <div className="audit-content" id="auditContent">
                    <div className="audit-step">
                      1. normalizeLexicon() → Casual vocabulary detected and
                      flagged for processing
                    </div>
                    <div className="audit-step">
                      2. assessInformalityThreshold() → Threshold exceeded by
                      23.7% - triggering Protocol 7
                    </div>
                    <div className="audit-step">
                      3. obfuscateVerbTension() → Direct statements converted to
                      passive voice construct
                    </div>
                    <div className="audit-step">
                      4. applyDepartmentToneGuide() → Corporate phraseology
                      injected per Manual 42-C
                    </div>
                    <div className="audit-step">
                      5. validateComplianceMetrics() → Final review completed by
                      BORING-MATIC™ v2.1
                    </div>
                    <div className="audit-step">
                      6. generateDocumentationStamps() → Official approval
                      stamps applied automatically
                    </div>
                    <div className="audit-step">
                      7. archiveProcessingRecord() → Transaction logged in
                      Master Database
                    </div>
                  </div>
                </div>

                <div className="reflective-panel">
                  <strong>OFFICIAL REFLECTIVE REVIEW:</strong> This linguistic
                  transformation demonstrates exceptional adherence to
                  departmental standards for syntactic neutrality and emotional
                  detachment. The systematic elimination of casual discourse
                  markers while maintaining semantic accuracy represents a
                  textbook example of our institutional commitment to
                  professional communication excellence, as established by the
                  Department of Semantic Integrity founding charter of 1962.
                </div>
              </div>
            </div>
          </div>

          <div className="modal" id="processingModal">
            <div className="modal-content">
              <h3>📋 FORM 18B: LINGUISTIC REALIGNMENT REQUEST</h3>
              <div className="loading-text typewriter" id="loadingText">
                Routing to Department of Semantic Integrity
                <span className="loading-dots"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
