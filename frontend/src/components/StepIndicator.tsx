export function StepIndicator() {
    return (
        <div>
            <h3 className="site-preview-heading">No labels</h3>
            <div className="usa-step-indicator usa-step-indicator--no-labels">
                <ol className="usa-step-indicator__segments">
                    <li
                    className="usa-step-indicator__segment usa-step-indicator__segment--complete"
                    >
                    <span className="usa-step-indicator__segment-label"
                        >Personal information <span className="usa-sr-only">completed</span>
                    </span>
                    </li>
                    <li
                    className="usa-step-indicator__segment usa-step-indicator__segment--complete"
                    >
                    <span className="usa-step-indicator__segment-label"
                        >Household status <span className="usa-sr-only">completed</span>
                    </span>
                    </li>
                    <li
                    className="usa-step-indicator__segment usa-step-indicator__segment--current"
                    >
                    <span className="usa-step-indicator__segment-label"
                        >Supporting documents</span
                    >
                    </li>
                    <li className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label"
                        >Signature <span className="usa-sr-only">not completed</span>
                    </span>
                    </li>
                    <li className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label"
                        >Review and submit <span className="usa-sr-only">not completed</span>
                    </span>
                    </li>
                </ol>
                <div className="usa-step-indicator__header">
                    <h4 className="usa-step-indicator__heading">
                        <span className="usa-step-indicator__heading-counter">
                            <span className="usa-sr-only">Step</span>
                            <span className="usa-step-indicator__current-step">3</span>
                            <span className="usa-step-indicator__total-steps">of 5</span>
                        </span>
                        <span className="usa-step-indicator__heading-text">
                            Supporting documents
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    )
}